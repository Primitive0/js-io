declare interface StdOut {
    write(data: string): void;
    writeln(data: string): void;
}

declare interface ConsoleColors {
    RESET_COLOR: string;

    custom_color(color: number, is_background: boolean = false): void;
}

export const stdout: StdOut;
export const stdin: undefined;
export const stderr: undefined;
export const colors: ConsoleColors;