import React from "react";
import Link from "next/link";

import Header from "../elements/header";
import EventPreview from "../eventPreview";
import HeaderBox from "../elements/headerBox";

import { Event } from "../../types";

import { styles } from "../../styles";

function AllEventsSection({ events }: { events: Event[] }) {
  return (
    <section className="mt-14  flex flex-col items-center">
      <HeaderBox>همه ایونت ها و دورهمی ها</HeaderBox>

      <Header>اطلاع رسانی آخرین دورهمی ها و ایونت ها</Header>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        {events.map((item, index) => (
          <EventPreview
            key={index}
            slug={item.slug}
            title={item.title}
            startDay={item.start_day}
            description={item.description}
          />
        ))}
      </div>

      <Link href="/events" className={`mt-16 py-3 px-12 ${styles.primary}`}>
        بیشتر
      </Link>
    </section>
  );
}

export default AllEventsSection;