import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Calendar } from 'lucide-react';

interface Appointment {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    appointment_date?: string;
    appointment_time?: string;
    message?: string;
    status: string;
    notes?: string;
    business?: {
        name: string;
    };
    created_at?: string;
}

interface ViewProps {
    appointment: Appointment;
}

export default function View({ appointment }: ViewProps) {
    const { t } = useTranslation();

    const formatDateTime = (date?: string, time?: string) => {
        if (!date) return '-';
        try {
            const dateObj = new Date(date);
            const dateStr = dateObj.toLocaleDateString();
            return time ? `${dateStr} ${time}` : dateStr;
        } catch (error) {
            return 'Invalid Date';
        }
    };

    return (
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('Appointment Details')}</DialogTitle>
                        <p className="text-sm text-muted-foreground">{appointment.name}</p>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {appointment.business && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t('Business')}</label>
                            <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{appointment.business.name}</p>
                        </div>
                    )}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Name')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{appointment.name}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Email')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{appointment.email || '-'}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Phone')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{appointment.phone || '-'}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Status')}</label>
                        <div className="bg-gray-50 p-2 rounded">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${
                                appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                                appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                appointment.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                                appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                appointment.status === 'no_show' ? 'bg-orange-100 text-orange-800' :
                                'bg-gray-100 text-gray-800'
                            }`}>
                                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                            </span>
                        </div>
                    </div>

                    {appointment.created_at && (
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t('Created At')}</label>
                            <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                                {new Date(appointment.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>

                {appointment.message && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Message')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded whitespace-pre-wrap">{appointment.message}</p>
                    </div>
                )}

                {appointment.notes && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Notes')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded whitespace-pre-wrap">{appointment.notes}</p>
                    </div>
                )}
            </div>
        </DialogContent>
    );
}