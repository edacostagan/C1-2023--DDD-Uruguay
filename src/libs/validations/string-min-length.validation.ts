export const StringSmallerThanMinLength = (value: string, minLength: number) : boolean =>{
    
    let result = false;

    if(value && value.length < minLength) result = true;

    return result;
}