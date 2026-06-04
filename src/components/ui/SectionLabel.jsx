import React from 'react';

const SectionLabel = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-3 mb-3">
      <span className="h-[2px] w-8 bg-signal-red"></span>
      <span className="font-label text-sm font-bold tracking-[0.25em] text-signal-red uppercase">
        {text}
      </span>
      <span className="h-[2px] w-8 bg-signal-red"></span>
    </div>
  );
};

export default SectionLabel;
