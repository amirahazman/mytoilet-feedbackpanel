<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div id="fullCalendar" ref="calendar"></div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2';
import { Calendar } from 'fullcalendar';

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();
export default {
  data() {
    return {
      events: [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          className: 'event-default'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: 'event-rose'
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: 'event-green'
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: 'event-red'
        },
        {
          title: 'Md-pro Launch',
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: 'event-azure'
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: 'event-azure'
        },
        {
          title: 'Click for Creative Tim',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: 'http://www.creative-tim.com/',
          className: 'event-orange'
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: 'http://www.creative-tim.com/',
          className: 'event-orange'
        }
      ]
    };
  },
  methods: {
    initCalendar() {
      const self = this;
      let $calendar = new Calendar(this.$refs.calendar, {
        header: {
          left: 'title',
          center: 'month,agendaWeek,agendaDay',
          right: 'prev,next,today'
        },
        defaultDate: today,
        selectable: true,
        selectHelper: true,
        views: {
          month: {
            // name of view
            titleFormat: {
              month: 'long',
              year: 'numeric'
            }
            // other view-specific options here
          },
          week: {
            titleFormat: {
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            }
          },
          day: {
            titleFormat: {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }
          }
        },
        select: async ({ start, end }) => {
          // on select we show the Sweet Alert modal with an input
          let result = await swal({
            title: 'Create an Event',
            html:
              '<div class="form-group">' +
              '<input class="form-control" placeholder="Event Title" id="input-field">' +
              '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
          });
          if (result) {
            let eventData;
            let eventTitle = document.getElementById('input-field').value;
            if (eventTitle) {
              eventData = {
                title: eventTitle,
                start: start,
                end: end,
                allDay: true
              };
              $calendar.addEvent(eventData);
            }
            $calendar.setOption('unselect');
          }
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events

        // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
        events: self.events
      });
      $calendar.render();
    }
  },
  mounted() {
    this.initCalendar();
  }
};
</script>
<style>
#fullCalendar {
  min-height: 400px;
}

.el-loading-spinner .path {
  stroke: #66615b !important;
}
</style>
