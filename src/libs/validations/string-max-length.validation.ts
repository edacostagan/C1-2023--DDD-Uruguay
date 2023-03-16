export const StringBiggerThanMaxLength = (value: string, maxLength: number) : boolean =>{

    let result = false;

    if(value && value.length > maxLength) result = true;

    return result;
}