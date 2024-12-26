import React from "react";
import { ChevronRight } from "lucide-react";

function CardList({ heading, items }) {
  return (
    <div className="max-w-3xl w-full mb-8">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded bg-white hover:bg-gray-50 
                       hover:shadow-sm transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <span className="font-medium">{item.title}— {item.org}</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">
                  {item.year}{item.status && `(${item.status})`}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
              </div>
            </div>

            {/* Topics */}
            {item.topics?.length > 0 && (
              <div className="mt-1 text-sm text-gray-600">
                Topics: {item.topics.join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;