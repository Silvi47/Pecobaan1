import React from "react";

const { Consumer, Provider } = React.createContext()

// Apa yang digunakan untuk consume informasi yang diletakkan di provider
export const ThemeConsumer = Consumer

// Untuk mengetahui nformasi apa yang available pada komponen apapun yang dibutuhkan aplikasi
export const ThemeProvider = Provider

