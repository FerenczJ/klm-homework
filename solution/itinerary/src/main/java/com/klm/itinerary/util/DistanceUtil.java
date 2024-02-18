package com.klm.itinerary.util;

import com.klm.itinerary.model.Coordinates;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.apache.lucene.spatial.util.GeoDistanceUtils;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DistanceUtil {

    public static double calculateDistance(Coordinates start, Coordinates end) {
        return GeoDistanceUtils.haversin(
                start.getLatitude().toDouble(),
                start.getLongitude().toDouble(),
                end.getLatitude().toDouble(),
                end.getLongitude().toDouble()
        ) / 1000;
    }
}
