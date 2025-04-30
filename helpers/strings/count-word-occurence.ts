export function countWordOccurrence(s:string,searchTerm:string){
    const regex = new RegExp(`\\b${searchTerm}\\b`,'g');   
    const matched =s.match(regex); 
    return matched ? matched?.length :0;
}