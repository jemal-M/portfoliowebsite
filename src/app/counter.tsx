import React from 'react'
import { useStore } from 'zustand'

function Counter() {
    const { count, inc } = useStore()
    return (
      <div>
        <span>{count}</span>
        <button onClick={inc}>one up</button>
      </div>
    )
  }
