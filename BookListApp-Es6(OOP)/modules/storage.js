export default class Storage {
  #key;
  constructor(key){
    this.#key = key;
  }

  getBooks(){
    const storedList = localStorage.getItem(this.#key);
    return JSON.parse(storedList) || [];
  }

  save(item){
    const storedList = localStorage.getItem(this.#key);
    const parsedList = JSON.parse(storedList) || [];
    parsedList.push(item);
    localStorage.setItem(this.#key, JSON.stringify(parsedList));
  }

  removeBook(bookId){
    const storedList = localStorage.getItem(this.#key);
    const parsedList = JSON.parse(storedList) || [];
    const filteredList = parsedList.filter(
      (item) => String(item.uniqueId) !== String(bookId)
    );
    localStorage.setItem(this.#key, JSON.stringify(filteredList));
  }
}
