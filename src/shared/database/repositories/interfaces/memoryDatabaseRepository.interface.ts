export interface IMemoryDatabaseRepository<T> {
  findAll(options?: Partial<T>): T[];
  findById(id: number): T | null;
  findOne(options: Partial<T>): T | null;
  create(entity: T): T;
  update(id: number, entity: T): T;
  delete(id: number): boolean;
}
