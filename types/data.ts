export interface IOption {
  id: number
  name: string
}

export interface ICategory {
  name: string
  id: number
  options: IOption[]
}

export interface IScale {
  id: number
  value: string
}

export interface IManufacturer {
  id: number
  name: string
}

export interface IMaterial {
  id: number
  name: string
}

export interface ICurrencyOption {
  label: string
  value: string
}

export interface IType {
  default: string | number
  options: { label: string; value: number }[]
}

export interface ICurrency {
  default: string
  options: ICurrencyOption[]
}

export interface IData {
  category: ICategory[]
  scale: IScale[]
  manufacturer: IManufacturer[]
  material: IMaterial[]
  currency: ICurrency
  type: IType
}
