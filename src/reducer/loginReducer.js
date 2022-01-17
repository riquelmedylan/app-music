export const reducer = (state, action) => {
     switch (action.type) {
          case "error":
               return {
                    status: false,
                    msg: action.payload,
               };

          default:
               throw new Error();
     }
};
