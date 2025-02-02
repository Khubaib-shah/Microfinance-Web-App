import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentApplications() {
  const applications = [
    {
      name: "Omar Malik",
      category: "Wedding Loan",
      subcategory: "Valima",
      amount: 500000,
      avatar: "/avatars/01.png",
      initials: "OM",
    },
    {
      name: "Junaid Danish",
      category: "Business Startup",
      subcategory: "Shop Assets",
      amount: 750000,
      avatar: "/avatars/02.png",
      initials: "JD",
    },
    {
      name: "Imran Nazir",
      category: "Education",
      subcategory: "University Fees",
      amount: 300000,
      avatar: "/avatars/03.png",
      initials: "IN",
    },
    {
      name: "Asad Siddiqui",
      category: "Home Construction",
      subcategory: "Structure",
      amount: 1000000,
      avatar: "/avatars/04.png",
      initials: "AS",
    },
  ];

  return (
    <div className="space-y-8">
      {applications.map((app) => (
        <div key={app.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={app.avatar} alt={app.name} />
            <AvatarFallback>{app.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{app.name}</p>
            <p className="text-sm text-muted-foreground">
              {app.category} - {app.subcategory}
            </p>
          </div>
          <div className="ml-auto font-medium">
            PKR {app.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
