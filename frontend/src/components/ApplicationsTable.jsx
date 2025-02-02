// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { MoreHorizontal } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const data = [
//   {
//     id: "APP001",
//     name: "Omar Malik",
//     email: "omar@example.com",
//     cnic: "35202-1234567-1",
//     category: "Wedding Loan",
//     subcategory: "Valima",
//     amount: 500000,
//     status: "pending",
//     city: "Lahore",
//     country: "Pakistan",
//     submittedAt: "2024-02-01",
//   },
//   // Add more sample data
// ];

// export function ApplicationsTable({ filters }) {
//   const [page, setPage] = useState(1);
//   const [rowsPerPage] = useState(10);

//   //   const filteredData = data.filter((item) => {
//   //     return (
//   //       (!filters.search ||
//   //         item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
//   //         item.id.toLowerCase().includes(filters.search.toLowerCase())) &&
//   //       (!filters.city || item.city === filters.city) &&
//   //       (!filters.status || item.status === filters.status)
//   //     );
//   //   });

//   //   const paginatedData = filteredData.slice(
//   //     (page - 1) * rowsPerPage,
//   //     page * rowsPerPage
//   //   );

//   return (
//     <div className="w-full">
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Token ID</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Category</TableHead>
//               <TableHead>Amount</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>City</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {/* {paginatedData.map((row) => ( key=*/}
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//               <TableCell>
//                 {new Intl.NumberFormat("en-PK", {
//                   style: "currency",
//                   currency: "PKR",
//                 }).format()}
//               </TableCell>
//               <TableCell>
//                 <Badge
//                   variant={
//                     "approved"
//                       ? "success"
//                       : row.status === "rejected"
//                       ? "destructive"
//                       : "default"
//                   }
//                 ></Badge>
//               </TableCell>
//               <TableCell></TableCell>
//               <TableCell>
//                 <Dialog>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" className="h-8 w-8 p-0">
//                         <span className="sr-only">Open menu</span>
//                         <MoreHorizontal className="h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                       <DialogTrigger asChild>
//                         <DropdownMenuItem>View Details</DropdownMenuItem>
//                       </DialogTrigger>
//                       <DropdownMenuItem>Update Status</DropdownMenuItem>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                   <DialogContent className="max-w-2xl">
//                     <DialogHeader>
//                       <DialogTitle>Application Details</DialogTitle>
//                     </DialogHeader>
//                     <div className="grid gap-4 py-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <h3 className="font-semibold">
//                             Applicant Information
//                           </h3>
//                           <div className="mt-2 space-y-2">
//                             <p>Name: </p>
//                             <p>Email: </p>
//                             <p>CNIC: </p>
//                             <p>City: </p>
//                             <p>Country: </p>
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="font-semibold">Loan Information</h3>
//                           <div className="mt-2 space-y-2">
//                             <p>Category: </p>
//                             <p>Subcategory: </p>
//                             <p>Amount: PKR </p>
//                             <p>Status: </p>
//                             <p>Submitted: </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => setPage((p) => Math.max(1, p - 1))}
//           disabled={page === 1}
//         >
//           Previous
//         </Button>
//         <Button variant="outline" size="sm">
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }
