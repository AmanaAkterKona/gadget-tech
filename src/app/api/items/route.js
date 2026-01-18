import { NextResponse } from 'next/server';
import items from '@/data/items.json';

// GET - সব items fetch করার জন্য
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: items,
      count: items.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST - নতুন item add করার জন্য (Protected page এর জন্য)
export async function POST(request) {
  try {
    const newItem = await request.json();
    
    // Validation
    if (!newItem.name || !newItem.price) {
      return NextResponse.json(
        { success: false, error: 'Name and price are required' },
        { status: 400 }
      );
    }

    // নতুন item তৈরি করুন
    const item = {
      id: Date.now().toString(), // Simple ID generation
      ...newItem,
      createdAt: new Date().toISOString()
    };

    // Note: JSON file এ সরাসরি save হবে না। 
    // এটা শুধু response এ return করবে।
    // Database থাকলে সেখানে save করতে হবে।
    
    return NextResponse.json({
      success: true,
      message: 'Item created successfully',
      data: item
    }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create item' },
      { status: 500 }
    );
  }
}