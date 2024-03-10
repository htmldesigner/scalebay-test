export interface IItem {
  type: number
  category: number
  additionalCategory: number
  adsName: string
  articul: string
  status: number
  manufacturer: number
  scale: number
  material: number
  description: string
  upload: [
    {
      uid: string
      lastModified: number
      lastModifiedDate: string
      name: string
      size: number
      type: string
      percent: number
      originFileObj: {
        uid: string
      }
      error: {
        status: number
        method: string
        url: string
      }
      response: string
      status: string
      thumbUrl: string
    },
  ]
  count: string
  startTime: number
  productToOrder: boolean
  daysBeforeAdmission: string
  autoDetect: boolean
  numberRepeats: string
  currency: string
  price: number
  minPrice: number
  postId: string
  userId: string
}
