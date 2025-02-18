import { createSlice } from '@reduxjs/toolkit';
import {
  changeIncome,
  getExpenseByDate,
  getIncomseByDate,
  removeExspenseById,
  removeIncomseById,
} from '../transactions/transactionsOperations';

const initialState = {
  // expense: null,
  income: false,
  transactionsIncomeMonth: [],
  transactionsIncomeYear: [],
  transactionsExpenseMonth: [],
  transactionsExpenseYear: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    /* Expense */
    // [addExpense.pending](state) {
    //   state.expense = null;
    // },
    // [addExpense.fulfilled](state, action) {
    //   state.expense = action.payload;
    // },
    // [addExpense.rejected](state, action) {
    //   state.expense = null;
    // },
    /* Income */
    // [changeIncome.pending](state) {
    //   state.income = false;
    // },
    [changeIncome](state, action) {
      state.income = action.payload;
    },
    // [changeIncome.rejected](state, action) {
    //   state.income = false;
    // },
    /* getExpenseByDate */
    [getExpenseByDate.pending](state) {
      state.transactionsExpenseMonth = null;
    },
    [getExpenseByDate.fulfilled](state, action) {
      state.transactionsExpenseMonth = action.payload;
    },
    [getIncomseByDate.pending](state) {
      state.transactionsIncomeMonth = null;
    },
    [getIncomseByDate.fulfilled](state, action) {
      state.transactionsIncomeMonth = action.payload;
    },
    [removeExspenseById.fulfilled](state, action) {
      state.transactionsExpenseMonth = state.transactionsExpenseMonth.filter(
        item => item._id !== action.meta.arg,
      );
    },
    [removeIncomseById.fulfilled](state, action) {
      state.transactionsIncomeMonth = state.transactionsIncomeMonth.filter(
        item => item._id !== action.meta.arg,
      );
    },
  },
});

export default transactionsSlice.reducer;
