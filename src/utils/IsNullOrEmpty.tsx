export default function IsNullOrEmpty(str: string) {
    if (str.length === 0 || str === null) {
        return true;
    } else {
        return false;
    }
}
