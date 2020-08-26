class StdOut {
    write(data) {
        process.stdout.write(data);
    }

    writeln(data) {
        process.stdout.write(data);
        process.stdout.write('\n');
    }
}

class ConsoleColors {
    RESET_COLOR = '\x1B[0m';

    custom_color(color, is_background = false) {
        return `\x1B[${8 + (is_background ? 40 : 30)};5;${color}m`;
    }
}


module.exports = {
    stdout: new StdOut(),
    stdin: undefined,
    stderr: undefined,
    colors: new ConsoleColors()
};
