// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `@import "@/assets/styles/styles.scss";`
//       }
//     }
//   }
// };

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/assets/styles/styles.scss";`
        }
      }
    }
  }
}