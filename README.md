# React 19 useEffect Cleanup Issue
This repository demonstrates a bug where the cleanup function in a React 19 `useEffect` hook is not being called when the component is unmounted. The issue is related to improper dependency array management. 

## Problem
The provided `MyComponent` uses `useEffect` to log the count and include a cleanup function. However, under certain conditions (like rapid component switching), the cleanup function might not be executed, potentially causing memory leaks or unexpected behavior.

## Solution
The solution involves correctly managing the dependencies of the `useEffect` hook. By including `count` in the dependency array, the effect re-runs whenever the `count` changes, and the cleanup function is executed properly when the component unmounts.