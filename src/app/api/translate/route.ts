import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { text, target } = await request.json();

        if (!text) {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        // Using Google Translate free API endpoint (fair use)
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target || 'en'}&dt=t&q=${encodeURIComponent(text)}`;

        const response = await fetch(url);
        const data = await response.json();

        // Google Translate free API returns a nested array: [[["translated", "source", ...], ...]]
        const translatedText = data[0].map((item: any) => item[0]).join('');

        return NextResponse.json({ translatedText });
    } catch (error) {
        console.error('Translation error:', error);
        return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
    }
}
