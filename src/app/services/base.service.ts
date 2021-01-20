export class BaseService<T> {
  private readonly indexSaved: string;

  constructor(indexSaved: string) {
    this.indexSaved = indexSaved;
  }

  public create(object: T): T {
    const list = this.getList();
    list.unshift(object);
    this.saveData(list);
    return object;
  }

  public getList(): T[] {
    const list: string | null = localStorage.getItem(this.indexSaved);
    return list ? JSON.parse(list) : [];
  }

  // public update(name: string, object: T): T {
  //   const list = this.getList();
  //   const index = list.findIndex((w: T) => w.name === name);
  //   list.splice(index, 1, object);
  //   this.saveData(list);
  //   return object;
  // }

  // public delete(name: string): T {
  //   const list = this.getList();
  //   const index = list.findIndex((w: T) => w.name === name);
  //   const object = list.find((w: T) => w.name === name);
  //   list.splice(index, 1);
  //   this.saveData(list);
  //   return object ? object : {} as T;
  // }

  private saveData(object: T[]): boolean {
    if (object.length > 0) {
      localStorage.setItem(this.indexSaved, JSON.stringify(object));
      return true;
    }
    return false;
  }
}
