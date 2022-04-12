export class UniqueError extends Error {
  private _field: string;

  constructor(field: string) {
    super(`The field: ${field} must be unique.`);

    this._field = field;
  }

  get field(): string {
    return this._field;
  }
}
