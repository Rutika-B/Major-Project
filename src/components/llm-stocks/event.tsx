import { format, parseISO } from 'date-fns';
import { Key } from 'react';

interface Event {
  summary: any;
  title: any;
  time_published: string;
  url: string;
}

export function Events({ events }: { events: Event[] }) {
  console.log(events);
  if (!Array.isArray(events) || events.length === 0) {
    return <div>No events to display</div>;
  }
  return (
    <div className="flex flex-col w-[642px] sm:flex-row gap-2 overflow-scroll py-4 -mt-2">
      {events.map(
        (event: {
          url: string | undefined;
          time_published: Key | null | undefined;
          title: string | any[];
          summary: string | any[];
        }) => (
          <a
            href={event.url}
            key={event.time_published}
            className="flex flex-col p-4 bg-zinc-900 rounded-md bg-gray-400 max-w-96 flex-shrink-0"
          >
            <div className="text-zinc-400 text-sm">
              {format(parseISO(String(event.time_published)), 'dd LLL, yyyy')}
            </div>
            <div className="text-base font-bold text-zinc-200">
              {event.title.slice(0, 30)}
            </div>
            <div className="text-zinc-500">{event.summary.slice(0, 70)}...</div>
          </a>
        ),
      )}
    </div>
  );
}
