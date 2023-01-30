export const getFilenameExtension = (filename:string):string | undefined => {
    return filename.split(".").pop();
}