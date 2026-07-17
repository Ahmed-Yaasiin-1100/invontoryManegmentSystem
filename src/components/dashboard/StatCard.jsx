// // const StatCard = ({
// //   title,
// //   value,
// //   subtitle,
// //   icon: Icon,
// //   gradient,
// //   badgeColor,
// // }) => {
// //   return (
// //     <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

// //       {/* Background Glow */}
// //       <div
// //         className={`absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-10 blur-3xl ${gradient}`}
// //       ></div>

// //       {/* Header */}
// //       <div className="relative flex items-center justify-between">

// //         <div
// //           className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${gradient}`}
// //         >
// //           <Icon size={28} />
// //         </div>

// //         <span
// //           className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
// //         >
// //           {subtitle}
// //         </span>
// //       </div>

// //       {/* Body */}
// //       <div className="relative mt-8">
// //         <p className="text-sm font-medium text-slate-500">
// //           {title}
// //         </p>

// //         <h2 className="mt-2 text-4xl font-extrabold text-slate-800">
// //           {value}
// //         </h2>
// //       </div>

// //       {/* Bottom Line */}
// //       <div
// //         className={`mt-6 h-1 rounded-full ${gradient}`}
// //       ></div>
// //     </div>
// //   );
// // };

// // export default StatCard;

// const StatCard = ({
//   title,
//   value,
//   subtitle,
//   icon: Icon,
//   gradient, // Tusaale: "bg-gradient-to-br from-blue-500 to-indigo-600"
//   badgeColor, // Tusaale: "bg-white/20 text-white" (Aad buu ugu qurux badan yahay halkan)
// }) => {
//   return (
//     // Halkan 'bg-white' waxaan ku beddelnay '${gradient}' si sanduuqa dhan uu midab u yeesho
//     // Sidoo kale qoraalka guud waxaan ka dhignay 'text-white'
//     <div className={`group relative overflow-hidden rounded-3xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 ${gradient} text-white`}>

//       {/* Background Glow (Wuxuu hadda siinayaa iftiin dheeri ah oo gudaha ah) */}
//       <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white opacity-20 blur-3xl"></div>

//       {/* Header */}
//       <div className="relative flex items-center justify-between">
        
//         {/* Icon Box: Waxaan ka dhignay caddaan iftiimaya (bg-white/20) si uu gradient-ka dambe ugu muuqdo */}
//         <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/25 text-white shadow-md backdrop-blur-sm">
//           <Icon size={28} />
//         </div>

//         {/* Badge */}
//         <span
//           className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${badgeColor}`}
//         >
//           {subtitle}
//         </span>
//       </div>

//       {/* Body */}
//       <div className="relative mt-8">
//         {/* Text-slate-500 waxaan u beddelnay text-white/85 si uu u iftiimo */}
//         <p className="text-sm font-medium text-white/85 uppercase tracking-wider">
//           {title}
//         </p>

//         {/* Value-ga oo caddaan weyn ah */}
//         <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
//           {value}
//         </h2>
//       </div>

//     </div>
//   );
// };

// export default StatCard;


const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient,
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${gradient} text-white`}>
      
      {/* Soft Glow hoose oo iftiin dheeraad ah siisa sanduuqa */}
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white opacity-15 blur-2xl transition-all duration-500 group-hover:scale-125"></div>

      {/* Header */}
      <div className="relative flex items-center justify-between">
        {/* Icon Box oo loo sameeyay Glassmorphism jilicsan */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md shadow-inner">
          <Icon size={24} />
        </div>

        {/* Badge oo si cad u muuqanaya hadda */}
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/10 tracking-wide text-white">
          {subtitle}
        </span>
      </div>

      {/* Body */}
      <div className="relative mt-8">
        {/* Qoraalka oo la yara jilciyay si lambarku u awood bato */}
        <p className="text-xs font-bold text-white/75 uppercase tracking-wider">
          {title}
        </p>

        {/* Lambarka oo si weyn u muuqda */}
        <h2 className="mt-1.5 text-4xl font-extrabold tracking-tight">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;