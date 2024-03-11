import { createSlice } from '@reduxjs/toolkit'
import data from '@/data/data.json'
import type { RootState } from '@/libs/store/store'
import { IItem } from '@/types/IItem'
import { ICategory, IData, IManufacturer, IMaterial, IScale } from '@/types/data'
import { mock } from '@/data/mock'

export const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    adsData: {} as IData,
    currentAdsType: 1,
    publishedAds: [...mock] as IItem[],
  },
  reducers: {
    loadData: state => {
      state.adsData = data as IData
    },
    addAds: (state, action) => {
      state.publishedAds.push(action.payload)
    },
    updateAds: (state, action) => {
      console.log(action.payload)
      state.publishedAds = state.publishedAds.map(el => (el.postId === action.payload.postId ? action.payload : el))
    },
    setAdsType: (state, action) => {
      state.currentAdsType = action.payload
    },
  },
})

export const { loadData, addAds, updateAds, setAdsType } = adsSlice.actions
export default adsSlice.reducer

export const selectAllCategory = (state: RootState) => {
  let result: { label: string; value: number }[] = []
  state.adsSlice.adsData?.category?.forEach((el: ICategory) => {
    result.push(...el.options.map(e => ({ label: e.name, value: e.id })))
  })
  return result
}

export const selectScale = (state: RootState) => {
  return state.adsSlice.adsData?.scale?.map((e: IScale) => ({ label: e.value, value: e.id }))
}

export const selectMaterial = (state: RootState) => {
  return state.adsSlice.adsData?.material?.map((e: IMaterial) => ({ label: e.name, value: e.id }))
}

export const selectManufacturer = (state: RootState) => {
  return state.adsSlice.adsData?.manufacturer?.map((e: IManufacturer) => ({ label: e.name, value: e.id }))
}

export const selectType = (state: RootState) => {
  return state.adsSlice.adsData?.type
}

export const additionalCategory = (state: RootState) => {
  return state.adsSlice.adsData?.category?.map(e => ({
    label: e.name ? e.name : '',
    options: e.options.map(o => ({ label: o.name, value: o.id })),
  }))
}

export const getItemByID = (state: RootState, id: string) => {
  return state.adsSlice.publishedAds.find(el => el.postId === id)
}
