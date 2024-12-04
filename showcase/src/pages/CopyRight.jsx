import { Badge } from "@/components/ui/badge";

const CopyRight = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        {/* Copyright Section */}
        <p className="mb-2 text-md">
          &copy; {new Date().getFullYear()} Cikitsam. All rights reserved.
        </p>

        {/* Developer Credit Section */}
        <p className="mb-2 text-md">
          Developed by <Badge variant="outline"><span className="text-blue-500">Team Cikitsam</span></Badge>
        </p>
      </div>
    </footer>
  );
};

export default CopyRight;
