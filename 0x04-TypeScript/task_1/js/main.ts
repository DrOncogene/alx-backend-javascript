interface Teacher {
  [key: string]: boolean | number | string,
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string
}
