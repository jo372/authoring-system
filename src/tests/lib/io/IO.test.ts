import IO from '../../../lib/io/IO';
import * as path from 'path';

describe('IO Wrapper', () => {
    it('should return true when a directory exists', () => {
        expect(IO.directoryExists(path.join(__dirname, '../../../lib/io'))).toBe(true);
    })
    it('should return false when a directory doesn\'t exist', () => {
        expect(IO.directoryExists(path.join(__dirname, '../../../lib/io/IO.test.ts'))).toBe(false);
    })
    it('should return true when a file exists', () => {
        expect(IO.fileExists(path.join(__dirname, 'IO.test.ts'))).toBe(true);
    })
    it('should return false when the file doesn\'t exist', () => {
        expect(IO.fileExists(path.join(__dirname, 'IO.test.tsx'))).toBe(false);
    })
    it('the contents of the file should be test when read', () => {
        const directoryPath = path.join(__dirname, '/testDirectory');
        const filePath = path.join(directoryPath, 'testFile.txt');
        const content = 'test';
        IO.makeDirectory(directoryPath);
        IO.writeFile(filePath, content);
        expect(IO.readFile(filePath)).toBe(content);
        IO.deleteDirectory(directoryPath);
    })
    it('should reuturn all the files within a directory', () => {
        const directoryPath = path.join(__dirname, '/testDirectory');
        const filePath = path.join(directoryPath, 'testFile.txt');
        const content = 'test';
        IO.makeDirectory(directoryPath);
        IO.writeFile(filePath, content);
        expect(IO.getFilesInDirectory(directoryPath)).toEqual(['testFile.txt']);
        IO.deleteDirectory(directoryPath);
    })
    it('should copy the file to a destination', () => {
        const source = path.join(__dirname, '/testDirectory/testFile.txt');
        const destination = path.join(__dirname, '/testDirectory/testFile2.txt');
        const content = 'test';
        IO.makeDirectory(path.join(__dirname, '/testDirectory'));
        IO.writeFile(source, content);
        IO.copyFile(source, destination);
        expect(IO.readFile(destination)).toBe(content);
        IO.deleteDirectory(path.join(__dirname, '/testDirectory'));
    })
    it('it should remove a file when IO.deleteFile is called', () => {
        const source = path.join(__dirname, '/testDirectory/testFile.txt');
        const content = 'test';
        IO.makeDirectory(path.join(__dirname, '/testDirectory'));
        IO.writeFile(source, content);
        IO.deleteFile(source);
        expect(IO.fileExists(source)).toBe(false);
        IO.deleteDirectory(path.join(__dirname, '/testDirectory'));
    })
    it('when delete directory is called it should only remove the directory specified.', () => {
        const directoryPath = path.join(__dirname, '/testDirectory');
        const filePath = path.join(directoryPath, 'testFile.txt');
        const content = 'test';
        IO.makeDirectory(directoryPath);
        IO.writeFile(filePath, content);
        IO.deleteDirectory(directoryPath);
        expect(IO.directoryExists(directoryPath)).toBe(false);
        IO.deleteDirectory(directoryPath);
    });
    it('should return all the directories within a folder recursively', () => {
        const directoryPath = path.join(__dirname + '/testDirectory');
        const subDirectoryPath = path.join(__dirname + '/testDirectory/subDirectory');
        const subSubDirectoryPath = path.join(__dirname + '/testDirectory/subDirectory/subSubDirectory');
        IO.makeDirectory(directoryPath);
        IO.makeDirectory(subDirectoryPath);
        IO.makeDirectory(subSubDirectoryPath);
        expect(IO.readDirectoryRecursive(directoryPath)).toEqual([
            'subDirectory',
            'subSubDirectory'
        ]);
        IO.deleteDirectory(directoryPath);
    })  
})