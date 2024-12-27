// src/components/portfolio/CardList.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

// Minimal, forced single-line top row
function CardList({ heading, items }) {
  return (
    <div className="my-6 w-full"> 
      {/* Or "max-w-3xl w-full" if you like */}
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              relative
              p-4
              border
              rounded
              bg-white
              hover:bg-gray-50
              hover:shadow-sm
              transition-all
              group
              cursor-pointer
            "
            // Example "onClick" to go somewhere if desired:
            onClick={() => {
              if (item.detail_page) {
                window.location.href = item.detail_page;
              }
            }}
          >
            {/* Top line: force no-wrap */}
            <div
              className="
                flex 
                items-center 
                justify-between
                [white-space:nowrap!important]
              "
            >
              {/* Left side: title + org/author */}
              <div
                className="
                  flex 
                  items-center 
                  gap-2 
                  [overflow:hidden!important] 
                  [text-overflow:ellipsis!important]
                "
              >
                <span className="font-medium">{item.title}</span>
                {item.org && <span className="text-gray-500 text-sm">— {item.org}</span>}
                {item.author && <span className="text-gray-500 text-sm">— {item.author}</span>}
                {item.institution && <span className="text-gray-500 text-sm">— {item.institution}</span>}
              </div>

              {/* Right side: year + status + chevron */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                {item.year && <span>{item.year}</span>}
                {item.status && <span>({item.status})</span>}
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </div>
            </div>

            {/* Optional second line: topics */}
            {item.topics?.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-medium mr-1">Topics:</span>
                {item.topics.join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
