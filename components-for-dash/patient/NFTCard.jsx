// "use client";
// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink, Download, Calendar } from 'lucide-react';

// export type MedicalNFT = {
//   id: string;
//   tokenId: string;
//   bookingId: string;
//   title: string;
//   doctor: string;
//   hospital: string;
//   treatmentDate: string;
//   mintDate: string;
//   diagnosis: string;
//   transactionHash: string | null;
//   ipfsMetadata: string;
//   imageUrl: string;
// };

// interface NFTCardProps {
//   nft: MedicalNFT;
//   viewOnBlockchain: (hash: string) => void;
//   viewMetadata: (hash: string) => void;
//   downloadCertificate: (nft: MedicalNFT) => void;
// }

// const NFTCard: React.FC<NFTCardProps> = ({ nft, viewOnBlockchain, viewMetadata, downloadCertificate }) => {
//   return (
//     <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="relative">
//         <img
//           src={nft.imageUrl}
//           alt={nft.title}
//           className="w-full h-48 object-cover"
//         />
//         <Badge className="absolute top-2 right-2 bg-purple-600">
//           #{nft.tokenId}
//         </Badge>
//       </div>

//       <CardContent className="p-4">
//         <h3 className="font-semibold text-lg mb-2">{nft.title}</h3>

//         <div className="space-y-2 text-sm text-gray-600 mb-4">
//           <div className="flex items-center space-x-2">
//             <Calendar className="h-4 w-4" />
//             <span>Treatment: {nft.treatmentDate}</span>
//           </div>
//           <p><strong>Doctor:</strong> {nft.doctor}</p>
//           <p><strong>Hospital:</strong> {nft.hospital}</p>
//           <p><strong>Booking ID:</strong> {nft.bookingId}</p>
//         </div>

//         <div className="bg-gray-50 p-3 rounded-lg mb-4">
//           <p className="text-sm"><strong>Diagnosis:</strong></p>
//           <p className="text-sm text-gray-700">{nft.diagnosis}</p>
//         </div>

//         <div className="text-xs text-gray-500 mb-4">
//           <p><strong>Minted:</strong> {nft.mintDate}</p>
//           <p><strong>Transaction:</strong> {nft.transactionHash ? `${nft.transactionHash.substring(0, 20)}...` : 'N/A'}</p>
//           <p><strong>Metadata:</strong> {nft.ipfsMetadata.substring(0, 15)}...</p>
//         </div>

//         <div className="space-y-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="w-full"
//             onClick={() => nft.transactionHash && viewOnBlockchain(nft.transactionHash)}
//             disabled={!nft.transactionHash}
//           >
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View on Blockchain
//           </Button>

//           <div className="grid grid-cols-2 gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => viewMetadata(nft.ipfsMetadata)}
//             >
//               Metadata
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => downloadCertificate(nft)}
//             >
//               <Download className="h-4 w-4 mr-1" />
//               PDF
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default NFTCard; 