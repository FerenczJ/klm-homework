package com.klm.itinerary.util;

import com.klm.itinerary.model.Coordinates;
import com.klm.itinerary.model.Meridian;
import org.apache.lucene.spatial.util.GeoDistanceUtils;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.times;

class DistanceUtilTest {

    @Test
    void testCalculateDistance_HaversinShouldBeCalled() {

        try (MockedStatic<GeoDistanceUtils> geoDistanceUtilsMock = Mockito.mockStatic(GeoDistanceUtils.class)) {
            geoDistanceUtilsMock.when(() -> GeoDistanceUtils.haversin(anyDouble(), anyDouble(), anyDouble(), anyDouble()))
                    .thenReturn(42.0);

            Meridian meridianMock = Mockito.mock(Meridian.class);
            Mockito.when(meridianMock.toDouble()).thenReturn(42.0);

            Coordinates coordinatesMock = Mockito.mock(Coordinates.class);
            Mockito.when(coordinatesMock.getLatitude()).thenReturn(meridianMock);
            Mockito.when(coordinatesMock.getLongitude()).thenReturn(meridianMock);

            DistanceUtil.calculateDistance(coordinatesMock, coordinatesMock);
            geoDistanceUtilsMock.verify(
                    () -> GeoDistanceUtils.haversin(anyDouble(), anyDouble(), anyDouble(), anyDouble()),
                    times(1)
            );
        }
    }
}