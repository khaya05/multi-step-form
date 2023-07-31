import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  period: string;
  addOns: string[];
}

const initialState: UserData = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  period: '',
  addOns: [],
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: string | string[] }>
    ) => {
      const { field, value } = action.payload;

      switch (field) {
        case 'name':
          state.name = value as string;
          break;
        case 'email':
          state.email = value as string;
          break;
        case 'phone':
          state.phone = value as string;
          break;
        case 'plan':
          state.plan = value as string;
          break;
        case 'period':
          state.period = value as string;
          break;
        case 'addOns':
          state.addOns = value as string[];
          break;
        default:
          break;
      }
    },
  },
});

export const { updateField } = userDataSlice.actions;

export default userDataSlice.reducer;
