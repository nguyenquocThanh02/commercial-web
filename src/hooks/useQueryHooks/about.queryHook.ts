import {useQuery} from "@tanstack/react-query";

import {AboutApis} from "@/services";

export const useQueryAbout = {
  useInforShop: () => {
    return useQuery({
      queryKey: ["inforShop"],
      queryFn: () => AboutApis.getInforShop(),
    });
  },
  useSocials: () => {
    return useQuery({
      queryKey: ["socials"],
      queryFn: () => AboutApis.getSocials(),
    });
  },
};
