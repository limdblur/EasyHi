import Mock from 'mockjs';
import moment from 'moment';

import {DATE_FORMAT, firstDayOfWeek} from 'utils';

const Random = Mock.Random;
Mock.mock(/\/get-schedules$/, () => {
  const today = moment();
  const firstDate = firstDayOfWeek(today, false);
  const scheduleDates = [];
  const calendar = new Array(7 * Random.integer(1, 5)).fill(0).map((value, index) => {
    let date = firstDate.add(+!!index, 'd');
    const status = date.isBefore(today) ? Random.pick(0, 3) : Random.natural(0, 2);
    date = date.format(DATE_FORMAT);
    [1, 2].includes(status) && scheduleDates.push(date);
    return {
      date,
      status
    };
  });
  const schedules = {};

  let startTime;

  scheduleDates.forEach((scheduleDate, dateIndex) => {
    startTime = moment(scheduleDate).add(Random.integer(6 * 60, 9 * 60), 'm');

    schedules[scheduleDate] = new Array(Random.integer(1, 5)).fill(0).map((value, index) => ({
      coursePicUrl: `60-60-${dateIndex}-${index}`,
      scheduleBooked: '@integer(0,20)',
      scheduleCoach: '@cname(2,5)',
      scheduleStartTime: +startTime.add(Random.integer(0, 120), 'm'),
      scheduleEndTime: +startTime.add(Random.pick(60, 120), 'm'),
      scheduleName: '@cword(5,12)课',
      scheduleRemaining: calendar.find(calendarItem => calendarItem.date === scheduleDate).status === 2
        ? 0 : '@integer(0,20)'
    }));
  });

  return Mock.mock({
    calendar,
    courseTypes: Random.range(0, Random.integer(2, 10)).map(() => ({
      courseTypeId: '@id',
      courseTypeName: '@cword(2,5)课',
      subscribeType: '@pick([1,2])'
    })),
    schedules
  });
});
