declare interface Writable {
    write(data: string): void;
    writeln(data: string): void;
}

declare interface ConsoleColors {
    RESET_COLOR: string;

    custom_color(color: number, is_background?: boolean): void;
}

declare interface ColorsGetter {
    custom_color(color: number): void;
}

declare interface Colors extends ColorsGetter  {
    RESET: string;
    bg: ColorsGetter;
}


export const stdout: Writable;
export const stdin: undefined;
export const stderr: Writable;
export const colors: Colors;
