export interface IMemoryDatabaseRepository<T> {
  findAll(): T[];
  findById(id: number): T | null;
  create(entity: T): T;
  update(id: number, entity: T): T;
  delete(id: number): boolean;
}
