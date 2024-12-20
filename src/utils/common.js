export const getLimitedWords = (paragraph, limit) => {
    const words = paragraph.split(' '); 
    if (words.length <= limit) {
        return paragraph;
    }
    return words.slice(0, limit).join(' ') + '...';
}