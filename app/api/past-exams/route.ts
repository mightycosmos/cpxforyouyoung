import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { PastExam } from '@/types/pastExam';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const jsonPath = path.join(process.cwd(), 'data/seeds/past-exams-parsed.json');
    if (fs.existsSync(jsonPath)) {
      const data = fs.readFileSync(jsonPath, 'utf-8');
      const exams: PastExam[] = JSON.parse(data);
      return NextResponse.json(exams);
    }
  } catch (error) {
    console.error('Failed to load parsed past exams:', error);
  }
  return NextResponse.json([]);
}

