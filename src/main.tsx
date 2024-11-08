import { useSignal, useSignalEffect } from '@preact/signals'
import { render } from 'preact'

type GDGComunityEvent = {
    title: string
    url: string
    cropped_picture_url: string
}

async function getLatestEvent(): Promise<GDGComunityEvent> {
    const res = await fetch(
        `https://gdg.community.dev/api/event_slim/for_chapter/854/?page_size=4&status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,cropped_banner_url,url,cohost_registration_url,description,description_short&page=1`,
        {
            mode: 'cors',
        }
    )

    const data = await res.json()

    const { results } = data

    console.log(results[0])

    return results[0]
}

// main()

const LatestEventLink = () => {
    const $latestEvent = useSignal<GDGComunityEvent | null>(null)

    useSignalEffect(() => {
        getLatestEvent().then(event => {
            $latestEvent.value = event
        })
    })

    return (
        <>
            {$latestEvent.value && (
                <a class="card" href={$latestEvent.value.url} target="_blank">
                    <div class="picture">
                        <img src={$latestEvent.value.cropped_picture_url} alt="GDG Community Event" />
                    </div>
                </a>
            )}
        </>
    )
}

render(<LatestEventLink />, document.getElementById('latest-event-link')!)