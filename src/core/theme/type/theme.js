// @flow
export type themeObject = {
    atom: {
        icon: {
            size: number,
            color: {
                gray: string,
                colorful: {
                    reply: string,
                    favorite: string,
                    repeat: string,
                }
            }
        },
    },
    molecule: {
        card: {

        },
        content: {

        },
        thread: {

        },
    },
    organism: {
        panel: {
            backgroundColor: string,
            width: number,
            statusBar: {
                height: number,
                color: {
                    gray: string,
                    colorful: {
                        posting: string,
                        streaming: string,
                    }
                }
            }
        }
    }
}
