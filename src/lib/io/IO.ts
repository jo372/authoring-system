import fs from 'fs';

export default abstract class IO {
    static makeDirectory(directoryName: string) {
        if (!fs.existsSync(directoryName)) {
            fs.mkdirSync(directoryName);
        }
    }
    static directoryExists(directoryName: string) : boolean {
        return fs.existsSync(directoryName);
    }
    static fileExists(fileName: string) : boolean {
        return fs.existsSync(fileName);
    }
    static readFile(fileName: string) : string {
        return fs.readFileSync(fileName, 'utf8');
    }
    static getFilesInDirectory(directoryName: string) : string[] {
        return fs.readdirSync(directoryName);
    }
    static writeFile(fileName: string, content: string) {
        fs.writeFileSync(fileName, content);
    }
    static copyFile(source: string, destination: string) {
        fs.copyFileSync(source, destination);
    }
    static deleteFile(fileName: string) {
        fs.unlinkSync(fileName);
    }
    static deleteDirectory(directoryName: string) {
        fs.rmdirSync(directoryName, {recursive: true});
    }
    static readDirectoryRecursive(directoryName: string) : string[] {
        const files = fs.readdirSync(directoryName);
        const directories = files.filter(file => fs.statSync(`${directoryName}/${file}`).isDirectory());
        const filesInDirectories = directories.map(directory => IO.readDirectoryRecursive(`${directoryName}/${directory}`));
        return [...files, ...filesInDirectories.flat()];
    }
}