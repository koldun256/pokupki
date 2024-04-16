import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export enum Theme { Light = 'light', Dark = 'dark' }

const initialState = Theme.Light

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState as Theme,
  reducers: {
    toggle: theme => theme == Theme.Light ? Theme.Dark : Theme.Light
  }
});

export const { toggle } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme
export default themeSlice.reducer
