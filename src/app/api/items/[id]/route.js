import { NextResponse } from 'next/server';
import items from '@/data/items.json';

// GET - একটি specific item fetch করার জন্য
export async function GET(request, context) {
  try {
    // params await করতে হবে
    const { id } = await context.params;
    
    // Item খুঁজুন
    const item = items.find(item => item.id === parseInt(id));
    
    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: item
    });
    
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch item' },
      { status: 500 }
    );
  }
}

// PUT - Item update করার জন্য
export async function PUT(request, context) {
  try {
    const { id } = await context.params;
    const updates = await request.json();
    
    const item = items.find(item => item.id === parseInt(id));
    
    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Item not found' },
        { status: 404 }
      );
    }
    
    const updatedItem = {
      ...item,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json({
      success: true,
      message: 'Item updated successfully',
      data: updatedItem
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update item' },
      { status: 500 }
    );
  }
}

// DELETE - Item delete করার জন্য
export async function DELETE(request, context) {
  try {
    const { id } = await context.params;
    
    const item = items.find(item => item.id === parseInt(id));
    
    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Item deleted successfully',
      data: item
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete item' },
      { status: 500 }
    );
  }
}