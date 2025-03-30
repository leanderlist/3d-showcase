<template>
    <div class="relative w-110 h-110">
        <div class="absolute top-0 left-0 w-full h-full" ref="target"></div>
        <ModelBackground />
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import ModelBackground from '@/components/ModelBackground.vue';

const props = defineProps({
    model: {
        type: String,
        required: true
    },
    scaling: {
        type: Number,
        required: false
    }
});

import * as THREE from 'three';

const target = ref();

onMounted(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const width = target.value.clientWidth;
    const height = target.value.clientHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    target.value.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 2;

    const mixer = new THREE.AnimationMixer(scene);
    const loader = new GLTFLoader();
    loader.load(`models/${props.model}.glb`, (gltf) => {
        const model = gltf.scene;
        const animation = gltf.animations[0];
        if(animation) {
            let action = mixer.clipAction(animation, model);
            action.play();
        }
        var boundingbox = new THREE.Box3().setFromObject(model);
        var size = new THREE.Vector3();
        var center = new THREE.Vector3();

        boundingbox.getSize(size);
        boundingbox.getCenter(center);

        const maxDim = Math.max(size.x, size.y, size.z);

        const targetSize = props.scaling || 1;
        const scaleFactor = targetSize / maxDim;
        model.scale.setScalar(scaleFactor);

        model.position.x = -center.x * scaleFactor;
        model.position.y = -center.y * scaleFactor;
        model.position.z = -center.z * scaleFactor;

        scene.add(model);
    }, undefined, (error) => {
        console.error('Error loading model:', error);
    });

    renderer.domElement.classList.add('w-full', 'h-full');

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.enableZoom = true;
    controls.maxDistance = 4;
    controls.minDistance = 1.5;

    controls.mouseButtons.RIGHT = null

    controls.enableRotate = true;

    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        let deltaTime = clock.getDelta();
        mixer.update(deltaTime);
        controls.update()
        renderer.render(scene, camera);
    };

    animate();
});


</script>