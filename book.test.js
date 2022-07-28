// import {getbooks, createBook, updateBook, deleteBook} from "./books.js";
//
// describe("testing CRUD operation", () => {
//     it("test fetch GET API", async () => {
//         global.fetch = jest.fn(() => {
//             Promise.resolve({
//                 name:"Thapa Strength",
//                 authorName:"it",
//                 price:{
//                     currency:"USD",
//                     amount:"1000"
//                 }
//             }.stringify());
//         });
//         const books = await getbooks();
//         expect(fetch).toHaveBeenCalledTimes(1);
//         //expect(value).toBe(false);
//
//     });
// });