export interface Entry {
    title: string,
    subheading: string,
    description: string,
    type: string,
    model_scaling: number,
    path: string[]
}

export interface Section {
    title: string
    entries: Entry[]
}