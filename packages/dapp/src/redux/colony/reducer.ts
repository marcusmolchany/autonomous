import { ColonyActions, ColonyActionTypes } from './actions'
import { Colony } from '../../models/Colony'

export interface ColonyState {
  hasColony: boolean
  isLoading: boolean
  colony?: Colony
}

const initialState: ColonyState = {
  hasColony: false,
  isLoading: false,
  colony: undefined
}

export function colonyReducer (state: ColonyState = initialState, action: ColonyActions): ColonyState {
  switch (action.type) {
    case ColonyActionTypes.Select: {
      return {
        ...state,
        hasColony: false,
        isLoading: true
      }
    }

    case ColonyActionTypes.SelectSuccess: {
      return {
        ...state,
        hasColony: true,
        isLoading: false,
        colony: action.colony
      }
    }

    case ColonyActionTypes.SelectFail:
    case ColonyActionTypes.Deselect: {
      return {
        ...state,
        hasColony: false,
        isLoading: false,
        colony: undefined
      }
    }

    default: {
      return state
    }
  }
}
